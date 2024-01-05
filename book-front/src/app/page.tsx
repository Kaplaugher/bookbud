export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>sup</h1>
      <input type="text" />
      <div className="flex flex-col divide-y-2">
        <div>
          <h1>Current Books</h1>
          <ul>
            <li>Book 1</li>
          </ul>
        </div>
        <div>
          <h1>Up Next</h1>
          <ul>
            <li>Book 1</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
