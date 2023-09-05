import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  imgLazy,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  toc,
  highlightLines,
  runCpp,
  runJavascript,
  runPython,
  runRust
} from './modules/plugins';

basic();
initSidebar();
initTopbar();
imgLazy();
imgPopup();
initLocaleDatetime();
initClipboard();
toc();
highlightLines();
runCpp();
runJavascript();
runPython();
runRust();
