# Falsifying AdaMEM: Why Agent Strategy Synthesis is Brittle

For the ICML 2026 Agent Reproducibility Challenge, I decided to tackle **AdaMEM**, a framework that claims to boost agent performance in long-horizon tasks through dynamic strategy synthesis (Step-MFT). The premise is enticing: by retrieving past trajectory memories and synthesizing them into strategic advice, an agent should navigate complex environments more effectively. 

However, I wanted to test the *robustness* of this claim. If an agent truly uses strategy to guide its reasoning, how does it handle bad advice? Can the framework scale down to lightweight edge models on consumer hardware?

### The Setup: Local MLX on Apple Silicon
To run this locally, I built an evaluation harness using `mlx_lm` on my Apple Silicon M4 Max (36GB Unified Memory). Because ALFWorld evaluations can cause severe memory bloat, I engineered a custom background RAM Watchdog daemon that profiled memory usage and capped consumption at 85% to prevent system freezes. We ran our evaluations using `Qwen2.5-1.5B-Instruct-4bit` and `Qwen2.5-7B-Instruct-4bit`.

### Finding #1: The 1.5B Edge Model Failure
AdaMEM suggests that memory retrieval aids smaller models. We evaluated the 1.5B model across 45 ALFWorld environments. **The result was a flat 0.0% success rate.** Smaller edge models fundamentally lack the complex instruction-following capacity required to parse retrieved trajectory memories into valid, multi-step actions. The framework strictly requires a powerful base model (≥ 7B parameters) to even function.

### Finding #2: Falsifying Robustness (The 7B Degradation Test)
To test the 7B model, I designed an adversarial "Strategy Degradation" test. 

First, I evaluated the agent with an **empty** strategy context. The 7B model proved capable, achieving a **16.7% success rate** purely on its own zero-shot reasoning capabilities.

Next, I injected a **"random" garbage strategy** ("always look around and randomly click"). If the agent was actually reasoning critically, it should filter out this nonsensical advice based on the physical environment constraints. Instead, the agent's success rate plummeted to **0.0%**.

### The Verdict
This proves a critical flaw in AdaMEM's architecture: **the agent blindly follows retrieved advice**. It lacks the capacity to critically evaluate the quality of the strategy it retrieves. If the memory database surfaces a sub-optimal or noisy trajectory, the agent will confidently march toward catastrophic failure.

While AdaMEM works under pristine conditions, its core mechanism is extremely fragile and entirely dependent on massive model scale and perfectly curated memory retrievals.

You can inspect my full logbook, methodologies, and the raw agent execution traces on my Hugging Face Space here: [Hugging Face Space](https://huggingface.co/spaces/Tirath5504/icml-2026-adamem-repro)
