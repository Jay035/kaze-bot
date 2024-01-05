interface CreateTokenProps{
    tokenLogo?: File | null;
    setTokenLogo?: (logo: File | undefined) => void;
}

interface GlobalProps{
    isModalShowing?: boolean;
	setIsModalShowing?: (x: boolean) => void;
}