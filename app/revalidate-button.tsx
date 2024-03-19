'use client';

export default function RevalidateButton({
  borderColor,
  label,
  tags,
}: {
  borderColor: string;
  label: string;
  tags: string[];
}) {
  const clickHandler = async () => {
    await fetch('/api/revalidate-tags', {
      body: JSON.stringify(tags),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  return (
    <button
      type="button"
      onClick={() => clickHandler()}
      style={{
        cursor: 'pointer',
        border: `1px solid ${borderColor}`,
        margin: '4px',
        padding: '4px',
      }}
    >
      {label}
    </button>
  );
}
