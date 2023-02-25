import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-LinkLand`;
    }, [title]);
};

export default useTitle;