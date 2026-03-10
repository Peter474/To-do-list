/* ==============================
   TASKLY — Dark Luxury Design
   ============================== */

:root {
    --bg-deep: #080812;
    --bg-card: rgba(255,255,255,0.04);
    --bg-card-hover: rgba(255,255,255,0.08);
    --accent: #c9a96e;
    --accent-glow: rgba(201, 169, 110, 0.3);
    --accent2: #6e9ec9;
    --green: #4ecb8d;
    --green-glow: rgba(78, 203, 141, 0.2);
    --text-primary: #f0ece4;
    --text-secondary: rgba(240,236,228,0.5);
    --text-muted: rgba(240,236,228,0.25);
    --border: rgba(255,255,255,0.08);
    --border-accent: rgba(201,169,110,0.3);
    --shadow: 0 20px 60px rgba(0,0,0,0.6);
    --radius: 16px;
    --radius-sm: 10px;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'DM Sans', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg-deep);
    color: var(--text-primary);
    font-family: var(--font-body);
    min-height: 100vh;
    overflow-x: hidden;
}

/* ---- Background Orbs ---- */
.bg-orbs {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
}

.orb1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #c9a96e, transparent 70%);
    top: -150px;
    right: -100px;
    animation: drift1 12s ease-in-out infinite;
}

.orb2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #6e9ec9, transparent 70%);
    bottom: -100px;
    left: -80px;
    animation: drift2 15s ease-in-out infinite;
}

.orb3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #4ecb8d, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: drift3 10s ease-in-out infinite;
}

@keyframes drift1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-30px, 30px) scale(1.1); }
}
@keyframes drift2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(20px, -20px) scale(1.05); }
}
@keyframes drift3 {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.08; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.12; }
}

/* ---- Install Banner ---- */
.install-banner {
    position: fixed;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);
    max-width: 560px;
    background: linear-gradient(135deg, rgba(201,169,110,0.15), rgba(110,158,201,0.1));
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-accent);
    border-radius: var(--radius);
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    z-index: 1000;
    transition: bottom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 -4px 30px rgba(0,0,0,0.4);
}

.install-banner.show {
    bottom: 20px;
}

.install-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.install-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--accent), #a07840);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
}

.install-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.install-text strong {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
}

.install-text span {
    font-size: 12px;
    color: var(--text-secondary);
}

.install-actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.install-btn {
    background: linear-gradient(135deg, var(--accent), #a07840);
    color: #0d0d1a;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-body);
    transition: all 0.2s;
}

.install-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px var(--accent-glow);
}

.dismiss-btn {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-secondary);
    border-radius: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
}

.dismiss-btn:hover {
    background: var(--bg-card-hover);
    transform: scale(1.05);
}

/* ---- App Wrapper ---- */
.app-wrapper {
    position: relative;
    z-index: 1;
    max-width: 640px;
    margin: 0 auto;
    padding: 0 16px 100px;
}

/* ---- Header ---- */
.app-header {
    padding: 40px 0 24px;
}

.header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--accent) 0%, #a07840 100%);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #0d0d1a;
    box-shadow: 0 8px 24px var(--accent-glow);
}

.app-title {
    font-family: var(--font-display);
    font-size: 32px;
    font-weight: 900;
    color: var(--text-primary);
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, var(--text-primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.header-meta {
    font-size: 13px;
    color: var(--text-secondary);
    text-align: right;
    line-height: 1.5;
}

/* ---- Date Section ---- */
.date-section {
    margin-bottom: 20px;
}

.date-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

.date-nav {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-btn {
    width: 40px;
    height: 40px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    transition: all 0.2s;
    flex-shrink: 0;
}

.nav-btn:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-accent);
    color: var(--accent);
    transform: scale(1.05);
}

input[type="date"] {
    flex: 1;
    padding: 12px 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-size: 15px;
    font-family: var(--font-body);
    outline: none;
    transition: all 0.3s;
    -webkit-appearance: none;
    cursor: pointer;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.7);
    cursor: pointer;
}

input[type="date"]:focus {
    border-color: var(--border-accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
    background: var(--bg-card-hover);
}

/* ---- Input Section ---- */
.input-wrapper {
    display: flex;
    align-items: center;
    gap: 0;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 6px 6px 6px 16px;
    transition: all 0.3s;
    position: relative;
}

.input-wrapper:focus-within {
    border-color: var(--border-accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
    background: var(--bg-card-hover);
}

.input-icon {
    color: var(--text-muted);
    font-size: 14px;
    margin-right: 10px;
    transition: color 0.3s;
    flex-shrink: 0;
}

.input-wrapper:focus-within .input-icon {
    color: var(--accent);
}

#taskInput {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 15px;
    font-family: var(--font-body);
    padding: 8px 0;
    min-width: 0;
}

#taskInput::placeholder {
    color: var(--text-muted);
}

#addTaskButton {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: linear-gradient(135deg, var(--accent), #a07840);
    color: #0d0d1a;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    font-family: var(--font-body);
    transition: all 0.3s;
    white-space: nowrap;
    flex-shrink: 0;
}

#addTaskButton:hover {
    background: linear-gradient(135deg, #d4b070, #c9a96e);
    transform: scale(1.03);
    box-shadow: 0 6px 20px var(--accent-glow);
}

#addTaskButton:active {
    transform: scale(0.97);
}

/* ---- Stats Bar ---- */
.stats-bar {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    flex: 1;
}

.stat-num {
    font-size: 22px;
    font-weight: 700;
    font-family: var(--font-display);
    color: var(--text-primary);
    line-height: 1;
}

.stat-num.pending { color: var(--accent); }
.stat-num.done { color: var(--green); }

.stat-label {
    font-size: 11px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 500;
}

.stat-divider {
    width: 1px;
    height: 30px;
    background: var(--border);
    flex-shrink: 0;
}

.progress-wrap {
    flex: 2;
}

.progress-bar {
    height: 6px;
    background: rgba(255,255,255,0.08);
    border-radius: 100px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--green), #2ea870);
    border-radius: 100px;
    width: 0%;
    transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 10px var(--green-glow);
}

/* ---- Tasks Container ---- */
.tasks-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* ---- Task Section ---- */
.task-section {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    transition: all 0.3s;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.pending-dot { 
    background: var(--accent);
    box-shadow: 0 0 8px var(--accent-glow);
}
.done-dot { 
    background: var(--green);
    box-shadow: 0 0 8px var(--green-glow);
}

.section-title h3 {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-badge {
    background: rgba(201,169,110,0.15);
    color: var(--accent);
    border: 1px solid rgba(201,169,110,0.2);
    border-radius: 20px;
    padding: 2px 10px;
    font-size: 12px;
    font-weight: 600;
    min-width: 28px;
    text-align: center;
    transition: all 0.3s;
}

.done-badge {
    background: rgba(78,203,141,0.1);
    color: var(--green);
    border-color: rgba(78,203,141,0.2);
}

/* ---- Task List ---- */
.task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* ---- Task Item ---- */
.task-item {
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s;
    animation: slideIn 0.3s ease;
    position: relative;
    overflow: hidden;
}

.task-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s;
}

.task-item:hover {
    background: var(--bg-card-hover);
    border-color: rgba(255,255,255,0.12);
    transform: translateX(3px);
}

.task-item:hover::before {
    opacity: 1;
}

.task-item.completed {
    opacity: 0.6;
}

.task-item.completed::before {
    background: linear-gradient(180deg, var(--green), transparent);
    opacity: 1;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ---- Styled Checkbox ---- */
.styled-checkbox {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border: 2px solid var(--border);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    flex-shrink: 0;
    position: relative;
    background: transparent;
}

.styled-checkbox:hover {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-glow);
}

.styled-checkbox:checked {
    background: var(--green);
    border-color: var(--green);
    box-shadow: 0 0 0 4px var(--green-glow);
}

.styled-checkbox:checked::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 7px;
    width: 5px;
    height: 9px;
    border: 2px solid #0d0d1a;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
}

/* ---- Task Span ---- */
.task-span {
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    color: var(--text-primary);
    line-height: 1.4;
    word-break: break-word;
    transition: all 0.3s;
    min-width: 0;
}

.completed .task-span {
    text-decoration: line-through;
    color: var(--text-muted);
}

/* ---- Task Actions ---- */
.task-actions {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
    opacity: 0;
    transition: opacity 0.2s;
}

.task-item:hover .task-actions {
    opacity: 1;
}

.task-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: all 0.2s;
    font-family: var(--font-body);
}

.edit-btn:hover {
    background: rgba(201,169,110,0.15);
    border-color: var(--accent);
    color: var(--accent);
}

.delete-btn:hover {
    background: rgba(255,80,80,0.12);
    border-color: rgba(255,80,80,0.4);
    color: #ff5050;
}

/* ---- Edit Input ---- */
.edit-input {
    flex: 1;
    background: rgba(255,255,255,0.06);
    border: 1px solid var(--border-accent);
    border-radius: 6px;
    color: var(--text-primary);
    font-size: 14px;
    font-family: var(--font-body);
    padding: 4px 10px;
    outline: none;
    box-shadow: 0 0 0 3px var(--accent-glow);
}

/* ---- Empty States ---- */
.empty-state {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 30px;
    color: var(--text-muted);
    text-align: center;
}

.empty-state.show {
    display: flex;
}

.empty-state i {
    font-size: 28px;
    opacity: 0.4;
}

.empty-state p {
    font-size: 13px;
    line-height: 1.5;
}

/* ---- Footer ---- */
footer {
    text-align: center;
    padding: 30px 0 10px;
    color: var(--text-muted);
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

footer strong {
    color: var(--accent);
}

footer a {
    color: var(--accent2);
    text-decoration: none;
    font-weight: 500;
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
}

footer a:hover {
    color: var(--accent);
    transform: translateY(-1px);
}

/* ---- Scrollbar ---- */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--border-accent); }

/* ---- Mobile ---- */
@media (max-width: 600px) {
    .app-header { padding: 24px 0 16px; }
    .app-title { font-size: 26px; }
    .logo-icon { width: 40px; height: 40px; font-size: 16px; }
    .stat-num { font-size: 18px; }
    .task-actions { opacity: 1; }
    #addTaskButton span { display: none; }
    #addTaskButton { padding: 10px 14px; }
    .header-meta { display: none; }
}
