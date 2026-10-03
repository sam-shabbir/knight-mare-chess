# KNIGHT'nMARE CHESS

An offline chess trainer: 30 built-in openings, your own repertoires with spaced repetition, a computer opponent from 800 to 2800, rated games and full game review. New in this version:

- **Puzzles**: about 3,000 puzzles in themed sets (tactics, mates, defence, endgames), positions from your own games, and "only move" moments mined from the wins of Fischer, Tal and 16 other all-time greats. Puzzle rating, spaced-repetition review, retakes after a miss, and an explanation of every solution (what the move does and which principles it follows). Modes: rated, learn, 3-minute clock, and "calculate first".
- **Guess the move**: replay 69 annotated master games from the winner's side, scored move by move: 10 each from the five highest-rated players ever (Carlsen, Caruana, Kasparov, Aronian, Fischer), plus Tal and other legends. All of them are also in the [games](games/) folder as PGN.
- **Learn**: 50 chess principles and 200 lessons (100 middlegame, 100 endgame), each with a Practice button.
- **Opening explorer** in the repertoire editor: the moves 18 all-time greats chose in each position (about 45,000 games, with results), famous-game moves, and an optional engine best move.
- **Coach repertoires**: 20 ready-made repertoires (core lines plus ten famous openings) as one-tap presets.
- **Plan**: a 26-week training plan with a progress ring, progress bars, a session checklist and coach's notes.

Alternative moves in puzzles are accepted when the engine confirms they are as good as the solution.

## Third-party data and code
- Lichess puzzle database (CC0), https://database.lichess.org/#puzzles
- Master game scores (puzzles, explorer, guess-the-move) from PGN Mentor, https://www.pgnmentor.com
- Stockfish.js 10 (engine), GPL-3.0, https://github.com/nmrugg/stockfish.js, loaded from jsDelivr
- chess.js 0.10.3 (rules), BSD-2-Clause, https://github.com/jhlywa/chess.js, loaded from jsDelivr

Because the app ships with Stockfish, it is distributed under GPL-3.0 (see LICENSE).
