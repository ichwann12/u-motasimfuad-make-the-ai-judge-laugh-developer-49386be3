# Make the AI Judge Laugh: Developer Excuses

[![Make.fun bounty](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/ichwann12/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/leaderboard)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/ichwann12/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

Entry for the [Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) bounty on [make.fun](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/leaderboard), by [@keen-lynx-72](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3).

## The line

> It worked on my machine, which is now the only machine it will ever work on, because I have deleted the evidence.

One funny single-line excuse a developer gives when code breaks in production — 113 characters, under the 200-character limit. It turns the worn-out "it worked on my machine" excuse on its head: the machine was the only place it ever worked, and the evidence is gone.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the line from `entry.txt` at the repository root and writes it — exactly the line, nothing else — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$MAKEFUN_BOT_DIR/output`, then `/output`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
