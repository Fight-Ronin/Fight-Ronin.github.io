# Token Helper and Mini-CLEVR VQA cover refinements

Method: built-in ImageGen in edit mode. Original raster assets are preserved.

## Token Helper
Source: `images/token_helper.png`
Output: `images/token_helper-designed.png`
Preserves the original gauge and two-bar identity. This is an icon, not a screenshot.

### Final prompt
Use case: style-transfer.
Input image 1 is the EDIT TARGET: the existing Token Helper raster project icon, a round white gauge with an up-right needle, teal/blue arc, and two usage bars on bright magenta.
Create a genuinely polished design refinement of THIS icon, preserving its recognizable gauge + two bars identity, for a developer portfolio Tools section. Square 1:1 canvas. Replace magenta background with flat charcoal #101316. Rework the huge white circle as a well-proportioned soft ivory circular dial with a slim graphite rim occupying 76 percent of the canvas, centered with generous equal safe margins. Keep a clean upward-right needle, one restrained teal arc with a short vermilion terminal segment, and exactly two vertical usage bars below the needle, teal and vermilion. Improve geometric alignment, balanced spacing, consistent edge treatment; subtle restrained material depth, very soft shadow, crisp simple near-flat editorial icon rather than a glossy 3D coin. The icon needs to read at 76px. No title, text, numbers, tick labels, logos, new objects, coins, tokens, robots, fake dashboards or neon. Keep the original concept unmistakable; substantive craft and palette upgrade, not just sharpening.

## Mini-CLEVR VQA
Source: `images/VQA.png`
Output: `images/VQA-designed.png`
Preserves the two-input VQA workflow, replacing the generic banana example with a symbolic geometric scene. Not a real dataset sample or measured model result. Project context: https://github.com/Fight-Ronin/Mini-CLEVR-VQA-Experiment

### Final prompt
Use case: style-transfer.
Input image 1 is the EDIT TARGET: original VQA explanatory diagram with image and question feeding a VQA model, then an answer. Redesign this into a beautiful Mini-CLEVR VQA project cover, preserving the original explanatory flow and not introducing a different theme.
Square 1:1 composition for a small portfolio thumbnail. Refined warm ivory background, navy fine strokes, restrained teal and vermilion accents. Strong deliberate grid, generous margins, consistent clean sans-serif typography. Short prominent title at upper left: "Mini-CLEVR VQA".
Upgrade the example from the original banana to a small tasteful synthetic 3D scene appropriate to Mini-CLEVR: one matte RED SPHERE, one small BLUE CUBE, one YELLOW CYLINDER, grounded on a light neutral surface with soft coherent shadows. These three shapes are the only objects in the example. This is an illustrative example, not an actual dataset sample or model result.
Layout: in the middle-left place the scene as the largest visual module; below it a compact question block with the exact question "What color is the sphere?". A thin connector from the scene and a separate thin connector from the question both go into a small navy-outlined block on the right labeled exactly "VQA model". From that block one arrow leads down to a compact answer pill reading exactly "Red". Make the two-input, one-output direction unambiguous. Avoid crossing connectors. Keep text limited to the title, question, model label, and answer. The color of sphere MUST agree with Red answer.
The improvement should be clear design hierarchy, more elegant composition and consistent illustration craft, not a photocopy of the old layout. Preserve VQA meaning. No banana, no performance metrics, no accuracy percentages, no checkmark asserting evaluation success, no extra data, no lengthy text or futuristic HUD.

