import { app } from "../../../scripts/app.js";
import { ComfyWidgets } from "../../../scripts/widgets.js";
import { $el } from "../../../scripts/ui.js";
import { api } from "../../../scripts/api.js";

app.registerExtension({
	name: "pysssssMod.HighlightPlus",
	init() {
		$el("style", {
			textContent: `
                .litemenu-entry[aria-expanded="true"] {
                    background-color: #ccc !important;
                    color: #000 !important;
                }
                
                .litemenu-entry[aria-expanded="true"]:hover {
                    background-color: #ccc !important;
                }

                .litemenu-entry:hover {
                    background-color: #444 !important;
                }
			`,
			parent: document.body,
		});
	}
});
