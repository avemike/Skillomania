import { useState } from "react";
import { useChallengeSeries } from "../api/useChallengeSeries";
import { ChallengeCreationModal } from "./ChallengeCreationModal";

export function ChallengeSeriesList() {
  const { data, isLoading, isError } = useChallengeSeries();

  const commonStyles =
    "bg-[url('./assets/welcome_website.svg')] bg-center bg-cover h-screen w-screen flex flex-col items-center justify-center";

  if (isLoading) {
    return (
      <div className={commonStyles}>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={commonStyles}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-[rgba(0,100,190,0.05)] backdrop-filter backdrop-blur-sm flex flex-col text-center items-center justify-center w-2/5 h-1/3 rounded-xl">
            <div className="text-black text-2xl font-bold">
              Error loading challenges
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={commonStyles}>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <div className="w-full flex justify-end px-8">
          <ChallengeCreateButton />
        </div>
        <div className="bg-[rgba(0,100,190,0.05)] backdrop-filter backdrop-blur-sm flex flex-col text-center items-center justify-center w-3/5 p-8 rounded-xl space-y-6">
          <div className="text-black text-3xl font-bold">Challenges</div>
          <div className="text-black text-lg font-semibold space-y-6">
            {data?.map((series) => (
              <div key={series.id} className="space-y-2 text-left w-full">
                <div className="text-xl font-bold">{series.title}</div>
                <div className="text-sm italic">{series.description}</div>
                <div className="pl-4 mt-2 space-y-1">
                  {series.challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="border-l-4 border-blue-500 pl-4"
                    >
                      <div className="font-semibold text-base">
                        {challenge.title}
                      </div>
                      <div className="text-sm">{challenge.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChallengeCreateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

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
