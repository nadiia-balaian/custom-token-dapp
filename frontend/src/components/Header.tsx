function ConnectButton() {
	return <w3m-button />
}

const Header = () => {

	return (
		<header className="w-ful border-b border-gray-600 p-4 flex justify-between items-center mb-6">
			<div className="flex items-center">
				<div className="flex items-center justify-center text-center text-xl">
					<span>Bitso test dApp</span>
				</div>
			</div>

			<div className="flex align-middle gap-4">
				<ConnectButton />
			</div>
		</header>
	);
};

export default Header;
