// !!! IMPORTANT !!!
// After breaking my head for 6 hours, 
// only direct import to traceur works properly
// Adding it internallt via b.add(es6ify.runtime) spoils other code
import "traceur/bin/traceur-runtime";

import "./sidebar/main";
import "./coder/main";
import "./blocks/main";

// All CSS are loaded via this file
import "./main.css";
