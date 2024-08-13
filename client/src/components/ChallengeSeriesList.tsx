import { useState } from "react";
import { useChallengeSeries } from "../api/useChallengeSeries";
import { ChallengeCreationModal } from "./ChallengeCreationModal";
import { useAuth } from "../AuthenticationProvider";
import { ChallengeSeriesCreationModal } from "./ChallengeSeriesCreationModal";
import { Challenge } from "../api/openapi";

export function ChallengeSeriesList() {
  const { data: response, isLoading, isError } = useChallengeSeries();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-[rgba(0,100,190,0.05)] backdrop-filter backdrop-blur-sm flex flex-col text-center items-center justify-center w-2/5 h-1/3 rounded-xl">
          <div className="text-black text-2xl font-bold">
            Error loading challenges
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center space-y-4">
      <div className="w-full flex justify-start">
        <ChallengeCreateButton />
        <ChallengeSeriesCreateButton />
      </div>
      <div className="bg-[rgba(255,255,255,0.6)] backdrop-filter backdrop-blur-md flex flex-col text-center items-center justify-center w-full rounded-xl space-y-6">
        <div className="text-black text-3xl font-bold">Challenges</div>
        <div className="text-black text-lg font-semibold space-y-6  overflow-y-auto">
          {response?.data?.slice(0, 3).map((series) => (
            <div key={series.id} className="space-y-2 text-left w-full">
              <div className="text-xl font-bold">{series.title}</div>
              <div className="text-sm italic">{series.description}</div>
              <div className="pl-4 mt-2 space-y-1">
                {series.challenges.map((challenge) => (
                  <ChallengeItem key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChallengeItem({ challenge }: { challenge: Challenge }) {
  const [isOpen, setIsOpen] = useState(false);

  const authorName = `${challenge.author.firstName} ${challenge.author.lastName}`;
  const effortLevel = challenge.effortLevel; // 1 | 2 | 3 | 4 | 5
  const requiredExpertise = challenge.requiredExpertise; // 0 | 1 | 2 | 3
  const challengeCategory = challenge.category.name;

  return (
    <div key={challenge.id} className="border-l-4 border-blue-500 pl-4 mb-4">
      <div className="font-semibold text-lg">{challenge.title}</div>
      <div className="text-sm text-gray-600">{challenge.description}</div>

      <div className="text-xs">
        <div
          className="flex items-center text-gray-500 cursor-pointer mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{isOpen ? "Hide Details" : "Show Details"}</span>
          {isOpen ? (
            <div className="w-4 h-4 ml-1">^</div>
          ) : (
            <div className="w-4 h-4 ml-1">v</div>
          )}
        </div>

        {isOpen && (
          <div className="mt-2 ml-2 space-y-1 text-gray-500">
            <div>
              <span className="font-semibold">Author:</span> {authorName}
            </div>
            <div>
              <span className="font-semibold">Effort Level:</span> {effortLevel}
              /5
            </div>
            <div>
              <span className="font-semibold">Required Expertise:</span>{" "}
              {requiredExpertise}/3
            </div>
            <div>
              <span className="font-semibold">Category:</span>{" "}
              {challengeCategory}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChallengeCreateButton() {
  const { isAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  // Don't show the button if the user is not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Challenge
      </button>
      <ChallengeCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function ChallengeSeriesCreateButton() {
  const { isAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Series
      </button>
      <ChallengeSeriesCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
