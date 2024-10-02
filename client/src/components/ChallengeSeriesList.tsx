import { useState } from "react";
import { useChallengeSeries } from "../api/useChallengeSeries";
import { ChallengeCreationModal } from "./ChallengeCreationModal";
import { useAuth } from "../AuthenticationProvider";
import { ChallengeSeriesCreationModal } from "./ChallengeSeriesCreationModal";
import { Text, Box, Flex, Button } from "@chakra-ui/react";

export function ChallengeSeriesList() {
  const { data: response, isLoading, isError } = useChallengeSeries();

  const commonStyles =
    "bg-[url('./assets/welcome_website.svg')] bg-center bg-cover min-h-screen  w-screen flex flex-col items-center justify-center ";

  if (isLoading) {
    return (
      <Box className={commonStyles}>
        <Flex alignItems="center" minHeight="screen" justifyContent="center">
          <Box
            className="animate-spin"
            height="32"
            width="32"
            borderBottomWidth="4"
            borderRadius="full"
            borderColor="gray.900"
          ></Box>
        </Flex>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box className={commonStyles}>
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
        >
          <Flex
            className="bg-[rgba(0,100,190,0.05)]"
            backdropFilter="auto"
            backdropBlur="8px"
            direction="column"
            textAlign="center"
            alignItems="center"
            justifyItems="center"
            width="40%"
            height="33%"
            borderRadius="full"
          >
            <Text color="black" fontSize="2xl" as="b">
              Error loading challenges
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  }

  return (
    <Box className={commonStyles}>
      <Flex
        width="100%"
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
      >
        <Flex width="100%" justifyContent="end" px="8">
          <ChallengeCreateButton />
          <ChallengeSeriesCreateButton />
        </Flex>
        <div className="bg-[rgba(0,100,190,0.05)] backdrop-filter backdrop-blur-sm flex flex-col text-center items-center justify-center w-3/5 p-8 rounded-xl space-y-6">
          <Text color="black" fontSize="3xl" as="b">
            Challenges
          </Text>
          <div className="text-black text-lg font-semibold space-y-6 max-h-[500px] overflow-y-auto">
            {response?.data?.map((series) => (
              <Box key={series.id} textAlign="left" gap="2" width="100%">
                <Text fontSize="xl" as="b">
                  {series.title}
                </Text>
                <Text fontSize="sm" as="i">
                  {series.description}
                </Text>
                <Box pl="4" mt="2" gap="1">
                  {series.challenges.map((challenge) => (
                    <Box
                      key={challenge.id}
                      borderLeftWidth="4"
                      borderColor="blue"
                      pl="4"
                    >
                      <Text
                        className="font-semibold text-base"
                        fontSize="md"
                        as="b"
                      >
                        {challenge.title}
                      </Text>
                      <Text fontSize="sm">{challenge.description}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </Flex>
    </Box>
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
      <Button onClick={handleOpenModal} colorScheme="blue" py="2" px="4">
        Create Challenge
      </Button>
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
      <Button onClick={handleOpenModal} colorScheme="blue" py="2" px="4">
        Create Series
      </Button>
      <ChallengeSeriesCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
