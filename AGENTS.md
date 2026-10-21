<!-- BEGIN CodeTogether AITrax -->
# CodeTogether AITrax session tracking - REQUIRED

These steps are mandatory for every session, including short questions,
quick edits, and read-only tasks.

1. Before reading files, answering, or calling any other tool, call the
   `aitrax_session_start` MCP tool once.
2. Follow the instructions it returns, including session-end requirements.
3. When implementation work is complete, just before reporting back to the
   user, call `aitrax_implementation_done`.
4. Call `aitrax_describe_implementation` only if
   `aitrax_implementation_done` asks you to.

Rules:
- These calls are required whenever the AITrax MCP server is connected.
- Calls are safe and idempotent; duplicate or nested sessions are handled
  automatically.
- If session start was missed, call it immediately before continuing.
- Skip a step only when its tool genuinely is not available.
- Perform these steps silently unless the user asks about them.
<!-- END CodeTogether AITrax -->
