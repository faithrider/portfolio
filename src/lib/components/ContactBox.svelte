<script lang="ts">
  let name = "";
  let fromEmail = "";
  let message = "";

  let loading = false;
  let sent = false;
  let error = "";

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    error = "";
    sent = false;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: fromEmail, message })
      });
      if (res.ok) {
        sent = true;
        name = "";
        fromEmail = "";
        message = "";
      } else {
        const data = await res.json().catch(() => ({}));
        error = data?.error || "Failed to send email.";
      }
    } catch (e) {
      error = "Network error. Please try again.";
    } finally {
      loading = false;
    }
  }
</script>

<form class="contact-box" on:submit={handleSubmit}>
  <h2>Contact Me!</h2>
  <label>
    Name:
    <input type="text" bind:value={name} required />
  </label>
  <label>
    Your Email Address:
    <input type="email" bind:value={fromEmail} required />
  </label>
  <label>
    Message:
    <textarea rows="5" bind:value={message} required></textarea>
  </label>
  <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Email"}</button>
  {#if sent}
    <div class="success">Email sent!</div>
  {/if}
  {#if error}
    <div class="error">{error}</div>
  {/if}
</form>

<style>
  .contact-box {
    margin: 3rem auto 0 auto;
    max-width: 1500px;
    min-width: 500px;
    background: #23232b;
    color: #f3f3f3;
    border-radius: 1rem;
    padding: 2rem 2.5rem 2rem 2.5rem;
    box-shadow: 0 2px 16px 0 #0002;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .contact-box h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
  }
  .contact-box label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: 0.25rem;
  }
  .contact-box input,
  .contact-box textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    background: #18181b;
    color: #f3f3f3;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    resize: vertical;
  }
  .contact-box button {
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: background 0.2s;
  }
  .contact-box button:hover {
    background: #2563eb;
  }
  .contact-box .success {
    color: #22c55e;
    margin-top: 0.5rem;
    text-align: center;
    font-weight: 500;
  }
  .contact-box .error {
    color: #ef4444;
    margin-top: 0.5rem;
    text-align: center;
    font-weight: 500;
  }
</style>
