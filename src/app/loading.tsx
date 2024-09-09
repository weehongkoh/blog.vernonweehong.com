export default function Loading() {
    return (
      <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-primary-950">
        <div className="flex h-screen items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-green-400"></div>
        </div>
      </div>
    );
  }