import { useQuery} from "@tanstack/react-query";
import getRandomNumber from "./getRandomNumbers";

const useGetNumbers = () => {
    const randomQuery = useQuery(
        { queryKey: ["randomNumbers"], queryFn: getRandomNumber, retry: 1}
    );

    return randomQuery
}

export default useGetNumbers