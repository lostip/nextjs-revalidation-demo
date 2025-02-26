'use client';

export default function InstallButton({
}: {
}) {
  const clickHandler = async () => {
    await fetch('/api/app/install', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <button
      onClick={() => clickHandler()}
      style={{
        border: `1px solid green`,
        cursor: 'pointer',
        margin: '4px',
        padding: '4px',
      }}
      type="button"
    >
      Install App
    </button>
  );
}
