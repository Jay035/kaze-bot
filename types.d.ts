interface CreateTokenProps{
    tokenLogo?: File | null;
    setTokenLogo?: (logo: File | undefined) => void;
}

interface GlobalProps{
    showModal?: boolean;
    isModalShowing?: boolean;
	setIsModalShowing?: (x: boolean) => void;
	toggleModal?: () => void;
	onButtonClick?: (x: any) => void;
    
}

interface ModalProps {
    airdropSendSuccessful?: boolean;
    isMintSuccessful?: boolean;
    isBurnSuccessful?: boolean;
    children: ReactElement;
}