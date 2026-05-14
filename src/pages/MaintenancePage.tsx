export function MaintenancePage() {
  return (
    <main
      role="main"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-background text-foreground"
    >
      <div className="max-w-xl w-full text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
          20pillars
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          We're moving to a new home
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          20pillars is relocating to a new site. This page is temporarily
          unavailable while we make the move. Please check back soon for the
          new address.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          <span
            aria-hidden="true"
            className="inline-block w-2 h-2 rounded-full bg-accent"
          />
          New site coming soon
        </div>
      </div>
    </main>
  );
}
