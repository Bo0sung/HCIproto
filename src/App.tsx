import { useState } from 'react';
import BaselineCounselorStep from './components/BaselineCounselorStep';
import BaselineRequestStep from './components/BaselineRequestStep';
import CalendarStep from './components/CalendarStep';
import CompleteStep from './components/CompleteStep';
import CounselorPreviewStep from './components/CounselorPreviewStep';
import MockChatStep from './components/MockChatStep';
import StepIndicator from './components/StepIndicator';
import StudyModeTabs from './components/StudyModeTabs';
import UserInputStep from './components/UserInputStep';
import type { ChatMessage, Counselor, Step, StudyMode } from './types';
import { analyzeConcernSpecialty, getCounselorsForConcern } from './utils/concernAnalysis';
import { requestCounselorReply } from './utils/llmChat';
import { generateFollowUpResponse, generateMockResponse } from './utils/mockResponses';

const createMessageId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;
const MAX_FOLLOW_UP_TURNS = 3;
const TYPING_INTERVAL_MS = 12;

export default function App() {
  const [studyMode, setStudyMode] = useState<StudyMode>('preview');
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userInput, setUserInput] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  const [mockChatMessages, setMockChatMessages] = useState<ChatMessage[]>([]);
  const [completed, setCompleted] = useState(false);
  const [isGeneratingResponse, setIsGeneratingResponse] = useState(false);
  const concernSpecialty = analyzeConcernSpecialty(userInput);
  const recommendedCounselors = getCounselorsForConcern(userInput);
  const followUpTurns = Math.max(0, mockChatMessages.filter((item) => item.role === 'student').length - 1);

  const resetFlow = (nextMode = studyMode) => {
    setCurrentStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setUserInput('');
    setSelectedCounselor(null);
    setMockChatMessages([]);
    setCompleted(false);
    setIsGeneratingResponse(false);
    setStudyMode(nextMode);
  };

  const handleChangeMode = (mode: StudyMode) => {
    if (mode === studyMode) return;
    resetFlow(mode);
  };

  const revealCounselorMessage = async (messageId: string, content: string) => {
    setMockChatMessages((messages) =>
      messages.map((message) =>
        message.id === messageId ? { ...message, content: '', isTyping: true } : message,
      ),
    );

    for (let index = 1; index <= content.length; index += 1) {
      const visibleText = content.slice(0, index);
      setMockChatMessages((messages) =>
        messages.map((message) =>
          message.id === messageId ? { ...message, content: visibleText, isTyping: true } : message,
        ),
      );
      await new Promise((resolve) => {
        window.setTimeout(resolve, TYPING_INTERVAL_MS);
      });
    }

    setMockChatMessages((messages) =>
      messages.map((message) =>
        message.id === messageId ? { ...message, content, isTyping: false } : message,
      ),
    );
  };

  const handleSelectCounselor = async (counselor: Counselor) => {
    setSelectedCounselor(counselor);

    if (studyMode === 'preview') {
      const studentMessage: ChatMessage = {
        id: createMessageId(),
        role: 'student',
        content: userInput,
      };
      const loadingMessage: ChatMessage = {
        id: createMessageId(),
        role: 'counselor',
        content: '상담사 응답을 생성하고 있습니다...',
        isTyping: true,
      };

      setMockChatMessages([studentMessage, loadingMessage]);
      setCurrentStep(4);
      setIsGeneratingResponse(true);

      try {
        const reply = await requestCounselorReply({
          counselor,
          originalConcern: userInput,
          userMessage: userInput,
          turnCount: 0,
          messages: [studentMessage],
        });
        await revealCounselorMessage(loadingMessage.id, reply);
      } catch {
        await revealCounselorMessage(loadingMessage.id, generateMockResponse(counselor.id, userInput));
      } finally {
        setIsGeneratingResponse(false);
      }
      return;
    }

    setMockChatMessages([]);
    setCurrentStep(4);
  };

  const handleAddTurn = async (message: string) => {
    if (!selectedCounselor || isGeneratingResponse || followUpTurns >= MAX_FOLLOW_UP_TURNS) return;

    const turnCount = followUpTurns;
    const studentMessage: ChatMessage = {
      id: createMessageId(),
      role: 'student',
      content: message.trim(),
    };
    const loadingMessage: ChatMessage = {
      id: createMessageId(),
      role: 'counselor',
      content: '상담사 응답을 생성하고 있습니다...',
      isTyping: true,
    };

    const nextMessages = [...mockChatMessages, studentMessage, loadingMessage];
    setMockChatMessages(nextMessages);
    setIsGeneratingResponse(true);

    try {
      const reply = await requestCounselorReply({
        counselor: selectedCounselor,
        originalConcern: userInput,
        userMessage: message,
        turnCount: turnCount + 1,
        messages: nextMessages.filter((item) => item.id !== loadingMessage.id),
      });
      await revealCounselorMessage(loadingMessage.id, reply);
    } catch {
      await revealCounselorMessage(
        loadingMessage.id,
        generateFollowUpResponse(selectedCounselor.id, message, turnCount),
      );
    } finally {
      setIsGeneratingResponse(false);
    }
  };

  const handleSubmit = () => {
    setCompleted(true);
    setCurrentStep(5);
  };

  const handleRestart = () => {
    resetFlow();
  };

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <StudyModeTabs mode={studyMode} onChange={handleChangeMode} />

        <div className="mb-6">
          <StepIndicator currentStep={currentStep} mode={studyMode} />
        </div>

        {currentStep === 1 && (
          <CalendarStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelectDate={setSelectedDate}
            onSelectTime={setSelectedTime}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <UserInputStep
            userInput={userInput}
            onChange={setUserInput}
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && studyMode === 'preview' && (
          <CounselorPreviewStep
            counselors={recommendedCounselors}
            specialtyLabel={concernSpecialty.label}
            specialtyReason={concernSpecialty.reason}
            userInput={userInput}
            onBack={() => setCurrentStep(2)}
            onSelect={handleSelectCounselor}
          />
        )}

        {currentStep === 3 && studyMode === 'baseline' && (
          <BaselineCounselorStep
            counselors={recommendedCounselors}
            onBack={() => setCurrentStep(2)}
            onSelect={handleSelectCounselor}
          />
        )}

        {currentStep === 4 && studyMode === 'preview' && selectedCounselor && (
          <MockChatStep
            counselor={selectedCounselor}
            messages={mockChatMessages}
            isGenerating={isGeneratingResponse}
            followUpTurns={followUpTurns}
            maxFollowUpTurns={MAX_FOLLOW_UP_TURNS}
            onBack={() => setCurrentStep(3)}
            onAddTurn={handleAddTurn}
            onSubmit={handleSubmit}
          />
        )}

        {currentStep === 4 && studyMode === 'baseline' && selectedCounselor && (
          <BaselineRequestStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            counselor={selectedCounselor}
            userInput={userInput}
            onBack={() => setCurrentStep(3)}
            onSubmit={handleSubmit}
          />
        )}

        {completed && currentStep === 5 && selectedCounselor && (
          <CompleteStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            counselor={selectedCounselor}
            userInput={userInput}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}
