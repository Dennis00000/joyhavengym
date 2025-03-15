<form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
  <div>
    <label>
    <input
      id="name"
      name="name"
      value=""
      onChange={handleChange}
      placeholder="Enter your name"
      required
      suppressHydrationWarning
    />
  </div>
  {/* Add suppressHydrationWarning to other inputs */}
</form> 