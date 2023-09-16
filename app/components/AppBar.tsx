import SignInButton from "./SignInButton";

const AppBar = () => {
    return (
        <header className="p-4 flex justify-between bg-slate-900">
            <div>
            <h1 className="text-2xl">Demo App de votaciones</h1>
            <h2 className="text-xl text-slate-400">Para mi querida Corrientes</h2>
            </div>
            <SignInButton />
        </header>
    )
}

export default AppBar;