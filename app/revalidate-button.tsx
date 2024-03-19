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
      onClick={() => clickHandler()}
      style={{
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        margin: '4px',
        padding: '4px',
      }}
      type="button"
    >
      {label}
    </button>
  );
}
