import * as Y from 'yjs';
import { yCollab, yUndoManagerKeymap } from 'y-codemirror.next';
import { WebrtcProvider } from 'y-webrtc';

import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';

import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import '../node_modules/xterm/css/xterm.css';

const ydoc = new Y.Doc();
const provider = new WebrtcProvider('codemirror6-demo-room-2', ydoc);
const ytext = ydoc.getText('codemirror');

const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

provider.awareness.setLocalStateField('user', {
  name: 'Anonymous ' + Math.floor(Math.random() * 100),
  color: color,
  colorLight: color,
});

const view = new EditorView({
  state: EditorState.create({
    doc: ytext.toString(),
    extensions: [
      keymap.of(yUndoManagerKeymap),
      basicSetup,
      keymap.of(indentWithTab),
      java(),
      yCollab(ytext, provider.awareness),
      oneDark,
      EditorView.theme({
        '&': { height: '100%' },
        '.cm-scroller': { overflow: 'auto' },
      }),
    ],
  }),
  parent: document.getElementById('editor'),
});

const terminal = new Terminal({
  fontFamily: '"Cascadia Code", Menlo, monospace',
  theme: {
    selection: '#44475A',
    background: '#282A36',
    foreground: '#F8F8F2',
    black: '#21222C',
    blue: '#BD93F9',
    cyan: '#8BE9FD',
    green: '#50FA7B',
    magenta: '#FF79C6',
    red: '#FF5555',
    white: '#F8F8F2',
    yellow: '#F1FA8C',
    brightBlack: '#6272A4',
    brightBlue: '#D6ACFF',
    brightCyan: '#A4FFFF',
    brightGreen: '#69FF94',
    brightMagenta: '#FF92DF',
    brightRed: '#FF6E6E',
    brightWhite: '#FFFFFF',
    brightYellow: '#FFFFA5',
  },
  cursorBlink: true,
});
const fitAddon = new FitAddon();
terminal.loadAddon(fitAddon);
terminal.open(document.getElementById('terminal'));
fitAddon.fit();
terminal.writeln(
  [
    '    Xterm.js is the frontend component that powers many terminals including',
    '                           \x1b[3mVS Code\x1b[0m, \x1b[3mHyper\x1b[0m and \x1b[3mTheia\x1b[0m!',
    '',
    ' ┌ \x1b[1mFeatures\x1b[0m ──────────────────────────────────────────────────────────────────┐',
    ' │                                                                            │',
    ' │  \x1b[31;1mApps just work                         \x1b[32mPerformance\x1b[0m                        │',
    ' │   Xterm.js works with most terminal      Xterm.js is fast and includes an  │',
    ' │   apps like bash, vim and tmux           optional \x1b[3mWebGL renderer\x1b[0m           │',
    ' │                                                                            │',
    ' │  \x1b[33;1mAccessible                             \x1b[34mSelf-contained\x1b[0m                     │',
    ' │   A screen reader mode is available      Zero external dependencies        │',
    ' │                                                                            │',
    ' │  \x1b[35;1mUnicode support                        \x1b[36mAnd much more...\x1b[0m                   │',
    ' │   Supports CJK 語 and emoji \u2764\ufe0f            \x1b[3mLinks\x1b[0m, \x1b[3mthemes\x1b[0m, \x1b[3maddons\x1b[0m, \x1b[3mtyped API\x1b[0m  │',
    ' │                                            ^ Try clicking italic text      │',
    ' │                                                                            │',
    ' └────────────────────────────────────────────────────────────────────────────┘',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ].join('\n\r')
);

// const worker = new Worker(new URL('./doppio.js', import.meta.url));
// const button = document.getElementById('loadButton');
// button.onclick = () => {
//   console.log('test');
// };