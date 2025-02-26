import InstallButton from "./install-button";

export const metadata = {
    description: 'Dummy App',
    title: 'Dummy App',
};

export default async function DummyAppPage() {
    return (
        <main style={{ fontSize: '20px', padding: '24px' }}>
            <h2>Hola, esto es Dummy App</h2>
            <InstallButton />
        </main>
    );
}
