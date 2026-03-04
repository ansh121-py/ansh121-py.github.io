import { useState } from "react";

const roadmap = [
  {
    phase: "01",
    title: "Python Foundations",
    color: "#00E5FF",
    duration: "1–2 weeks",
    icon: "🐍",
    topics: [
      { name: "Python syntax & data types", detail: "int, float, str, bool, None" },
      { name: "Lists, Tuples, Sets, Dicts", detail: "Built-in data structures" },
      { name: "Loops & Conditionals", detail: "for, while, if/elif/else" },
      { name: "Functions & Recursion", detail: "def, *args, **kwargs, base cases" },
      { name: "List Comprehensions", detail: "Pythonic way to process lists" },
      { name: "Big O Notation Intro", detail: "O(1), O(n), O(n²), O(log n)" },
    ],
    resources: ["Python Docs", "Automate the Boring Stuff", "CS50P"],
  },
  {
    phase: "02",
    title: "Arrays & Strings",
    color: "#69FF47",
    duration: "1–2 weeks",
    icon: "📦",
    topics: [
      { name: "Array traversal & manipulation", detail: "Indexing, slicing, reversal" },
      { name: "Two Pointer technique", detail: "Opposite ends converging" },
      { name: "Sliding Window", detail: "Fixed & variable size windows" },
      { name: "Prefix Sums", detail: "Range query optimization" },
      { name: "String manipulation", detail: "Palindromes, anagrams, substrings" },
      { name: "Sorting algorithms", detail: "Bubble, Selection, Insertion, Merge, Quick" },
    ],
    resources: ["LeetCode Easy Arrays", "NeetCode 150"],
  },
  {
    phase: "03",
    title: "Linked Lists",
    color: "#FF6B6B",
    duration: "1 week",
    icon: "🔗",
    topics: [
      { name: "Singly Linked List", detail: "Node class, head pointer" },
      { name: "Doubly Linked List", detail: "prev & next pointers" },
      { name: "Fast & Slow Pointers", detail: "Floyd's cycle detection" },
      { name: "Reversal patterns", detail: "Iterative & recursive" },
      { name: "Merge & sort lists", detail: "Merge two sorted lists" },
      { name: "LRU Cache concept", detail: "OrderedDict or doubly LL + hashmap" },
    ],
    resources: ["Visualgo.net", "LeetCode Linked List tag"],
  },
  {
    phase: "04",
    title: "Stacks & Queues",
    color: "#FFD93D",
    duration: "1 week",
    icon: "🥞",
    topics: [
      { name: "Stack with list/deque", detail: "LIFO operations: push, pop, peek" },
      { name: "Queue & Deque", detail: "FIFO, collections.deque" },
      { name: "Monotonic Stack", detail: "Next greater/smaller element" },
      { name: "Valid Parentheses", detail: "Bracket matching problems" },
      { name: "Min Stack", detail: "Track min in O(1)" },
      { name: "BFS with Queue", detail: "Level-order traversal pattern" },
    ],
    resources: ["LeetCode Stack tag", "NeetCode Stacks playlist"],
  },
  {
    phase: "05",
    title: "Hash Maps & Sets",
    color: "#C77DFF",
    duration: "1 week",
    icon: "#️⃣",
    topics: [
      { name: "dict & set in Python", detail: "O(1) average lookup" },
      { name: "Frequency counting", detail: "Counter from collections" },
      { name: "Two Sum pattern", detail: "Complement lookup trick" },
      { name: "Grouping & bucketing", detail: "Group anagrams, etc." },
      { name: "Hashing custom objects", detail: "__hash__ and __eq__" },
      { name: "defaultdict & Counter", detail: "Powerful Python tools" },
    ],
    resources: ["Python collections docs", "LeetCode Hashing problems"],
  },
  {
    phase: "06",
    title: "Trees",
    color: "#06D6A0",
    duration: "2–3 weeks",
    icon: "🌳",
    topics: [
      { name: "Binary Tree basics", detail: "Node, left/right children" },
      { name: "DFS: Inorder/Pre/Post", detail: "Recursive & iterative" },
      { name: "BFS / Level Order", detail: "Queue-based traversal" },
      { name: "Binary Search Tree", detail: "Insert, delete, search" },
      { name: "Tree DP", detail: "Diameter, max path sum" },
      { name: "Trie (Prefix Tree)", detail: "Word search & autocomplete" },
    ],
    resources: ["Visualgo Trees", "LeetCode Tree tag", "NeetCode Trees"],
  },
  {
    phase: "07",
    title: "Heaps & Priority Queues",
    color: "#FF9F1C",
    duration: "1 week",
    icon: "⛰️",
    topics: [
      { name: "Min Heap / Max Heap", detail: "heapq module in Python" },
      { name: "heapq.heappush / heappop", detail: "O(log n) operations" },
      { name: "K largest / K smallest", detail: "Classic heap problems" },
      { name: "Merge K sorted lists", detail: "Heap + pointer pattern" },
      { name: "Top K Frequent Elements", detail: "Counter + heap combo" },
      { name: "Median from data stream", detail: "Two heaps approach" },
    ],
    resources: ["Python heapq docs", "LeetCode Heap tag"],
  },
  {
    phase: "08",
    title: "Graphs",
    color: "#4CC9F0",
    duration: "2–3 weeks",
    icon: "🕸️",
    topics: [
      { name: "Graph representations", detail: "Adjacency list & matrix" },
      { name: "DFS & BFS on graphs", detail: "Visited set to avoid cycles" },
      { name: "Topological Sort", detail: "Kahn's algo & DFS approach" },
      { name: "Union-Find / DSU", detail: "Path compression & union by rank" },
      { name: "Shortest Path: Dijkstra", detail: "Weighted graphs, min heap" },
      { name: "Bellman-Ford & Floyd", detail: "Negative weights, all-pairs" },
    ],
    resources: ["Visualgo Graph", "LeetCode Graph tag", "William Fiset Graph Theory"],
  },
  {
    phase: "09",
    title: "Dynamic Programming",
    color: "#F72585",
    duration: "3–4 weeks",
    icon: "🧮",
    topics: [
      { name: "Memoization (Top-Down)", detail: "@lru_cache or dict cache" },
      { name: "Tabulation (Bottom-Up)", detail: "DP table iteration" },
      { name: "1D DP patterns", detail: "Fibonacci, climbing stairs, house robber" },
      { name: "2D DP patterns", detail: "Grid paths, edit distance" },
      { name: "Knapsack variants", detail: "0/1, unbounded, bounded" },
      { name: "LCS / LIS", detail: "Subsequence problems" },
    ],
    resources: ["Aditya Verma DP playlist", "LeetCode DP Study Plan", "NeetCode DP"],
  },
  {
    phase: "10",
    title: "Advanced & Interview Prep",
    color: "#FF6B9D",
    duration: "Ongoing",
    icon: "🏆",
    topics: [
      { name: "Backtracking", detail: "N-Queens, Sudoku, permutations" },
      { name: "Greedy Algorithms", detail: "Activity selection, Huffman" },
      { name: "Segment Trees & BIT", detail: "Range queries & updates" },
      { name: "Advanced Graph algos", detail: "MST: Kruskal, Prim" },
      { name: "Math & Bit Manipulation", detail: "XOR tricks, bit masking" },
      { name: "Mock interviews", detail: "LeetCode contests, Pramp, Interviewing.io" },
    ],
    resources: ["LeetCode Top Interview 150", "Blind 75", "Grind 169"],
  },
];

export default function DSARoadmap() {
  const [activePhase, setActivePhase] = useState(null);
  const [completedPhases, setCompletedPhases] = useState(new Set());

  const toggleComplete = (e, phaseNum) => {
    e.stopPropagation();
    setCompletedPhases(prev => {
      const next = new Set(prev);
      next.has(phaseNum) ? next.delete(phaseNum) : next.add(phaseNum);
      return next;
    });
  };

  const progress = Math.round((completedPhases.size / roadmap.length) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Courier New', monospace",
      color: "#e0e0e0",
      padding: "40px 20px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .phase-card {
          border: 1px solid #222;
          border-radius: 4px;
          margin-bottom: 12px;
          transition: all 0.25s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .phase-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--accent);
          transform: scaleY(0);
          transition: transform 0.25s ease;
        }
        .phase-card:hover::before,
        .phase-card.active::before {
          transform: scaleY(1);
        }
        .phase-card:hover {
          border-color: #444;
          background: #111118 !important;
        }
        .phase-card.active {
          border-color: var(--accent) !important;
        }
        .topic-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 8px 12px;
          border-bottom: 1px solid #1a1a24;
          gap: 12px;
        }
        .topic-item:last-child { border-bottom: none; }
        .check-btn {
          background: none;
          border: 1px solid #333;
          border-radius: 2px;
          width: 20px;
          height: 20px;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          transition: all 0.2s;
          color: #fff;
        }
        .check-btn:hover { border-color: #666; }
        .progress-bar {
          height: 4px;
          background: #1a1a24;
          border-radius: 2px;
          overflow: hidden;
          margin: 8px 0;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00E5FF, #C77DFF, #F72585);
          border-radius: 2px;
          transition: width 0.5s ease;
        }
        .resource-tag {
          display: inline-block;
          background: #111;
          border: 1px solid #2a2a3a;
          border-radius: 3px;
          padding: 2px 8px;
          font-size: 10px;
          color: #888;
          margin: 2px;
          letter-spacing: 0.05em;
        }
        .phase-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
        }
        .phase-number {
          font-family: 'Bebas Neue', cursive;
          font-size: 36px;
          line-height: 1;
          opacity: 0.35;
          letter-spacing: 2px;
        }
        .expand-icon {
          margin-left: auto;
          font-size: 12px;
          color: #555;
          transition: transform 0.25s;
        }
        .expand-icon.open { transform: rotate(180deg); }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 760, margin: "0 auto 48px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "#555", marginBottom: 8 }}>
          // COMPLETE GUIDE
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(48px, 8vw, 88px)",
          lineHeight: 0.95,
          letterSpacing: "4px",
          margin: 0,
          background: "linear-gradient(135deg, #fff 30%, #555)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          DSA MASTERY<br />
          <span style={{
            background: "linear-gradient(90deg, #00E5FF, #C77DFF, #F72585)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>IN PYTHON</span>
        </h1>
        <p style={{ color: "#555", fontSize: 13, marginTop: 12, letterSpacing: "0.1em" }}>
          10 PHASES · ~16 WEEKS · FROM ZERO TO INTERVIEW-READY
        </p>

        {/* Progress */}
        <div style={{ marginTop: 24, background: "#0d0d14", border: "1px solid #1a1a24", borderRadius: 4, padding: "14px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#555", letterSpacing: "0.15em", marginBottom: 6 }}>
            <span>PROGRESS</span>
            <span style={{ color: progress > 0 ? "#00E5FF" : "#555" }}>{completedPhases.size}/{roadmap.length} PHASES · {progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {roadmap.map((phase, i) => {
          const isActive = activePhase === i;
          const isDone = completedPhases.has(i);

          return (
            <div
              key={i}
              className={`phase-card ${isActive ? "active" : ""}`}
              style={{
                "--accent": phase.color,
                background: isDone ? "#0d120d" : "#0d0d14",
                borderColor: isDone ? "#1a2e1a" : "#1a1a24",
                opacity: isDone ? 0.75 : 1,
              }}
              onClick={() => setActivePhase(isActive ? null : i)}
            >
              {/* Header row */}
              <div className="phase-header">
                <div className="phase-number" style={{ color: phase.color }}>{phase.phase}</div>
                <div style={{ fontSize: 20 }}>{phase.icon}</div>
                <div>
                  <div style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 22,
                    letterSpacing: "2px",
                    color: isDone ? "#4a7a4a" : "#e0e0e0",
                  }}>
                    {phase.title}
                  </div>
                  <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em" }}>
                    ⏱ {phase.duration}
                  </div>
                </div>

                <button
                  className="check-btn"
                  style={{
                    background: isDone ? phase.color : "none",
                    borderColor: isDone ? phase.color : "#333",
                    marginLeft: 8,
                  }}
                  onClick={e => toggleComplete(e, i)}
                  title={isDone ? "Mark incomplete" : "Mark complete"}
                >
                  {isDone ? "✓" : ""}
                </button>

                <div className={`expand-icon ${isActive ? "open" : ""}`}>▼</div>
              </div>

              {/* Expanded content */}
              {isActive && (
                <div style={{ borderTop: `1px solid ${phase.color}22` }}>
                  {/* Topics */}
                  <div style={{ padding: "4px 0" }}>
                    {phase.topics.map((topic, j) => (
                      <div key={j} className="topic-item">
                        <div>
                          <div style={{ fontSize: 13, color: "#ccc", marginBottom: 2 }}>
                            <span style={{ color: phase.color, marginRight: 8, fontSize: 11 }}>▸</span>
                            {topic.name}
                          </div>
                          <div style={{ fontSize: 11, color: "#555", paddingLeft: 20 }}>{topic.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resources */}
                  <div style={{ padding: "10px 18px 14px", borderTop: "1px solid #1a1a24" }}>
                    <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", marginBottom: 6 }}>RESOURCES</div>
                    {phase.resources.map((r, j) => (
                      <span key={j} className="resource-tag">{r}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Footer tips */}
        <div style={{
          marginTop: 40,
          padding: "20px 24px",
          background: "#0d0d14",
          border: "1px solid #1a1a24",
          borderRadius: 4,
          fontSize: 12,
          color: "#555",
          lineHeight: 1.9,
          letterSpacing: "0.05em",
        }}>
          <div style={{ color: "#333", marginBottom: 8, fontFamily: "'Bebas Neue'", fontSize: 16, letterSpacing: 2 }}>// PRO TIPS</div>
          <div>→ <span style={{ color: "#888" }}>Solve at least 5–10 LeetCode problems per phase before moving on</span></div>
          <div>→ <span style={{ color: "#888" }}>Always understand the why, not just the how — analyze time & space complexity</span></div>
          <div>→ <span style={{ color: "#888" }}>Use Anki cards for patterns; spaced repetition beats cramming</span></div>
          <div>→ <span style={{ color: "#888" }}>Track your progress: revisit wrong problems after 3 days</span></div>
          <div>→ <span style={{ color: "#888" }}>Phase 09 (DP) is the hardest — spend extra time, don't rush it</span></div>
        </div>
      </div>
    </div>
  );
}
