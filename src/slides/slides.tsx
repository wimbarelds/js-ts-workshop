import { createAssignment, createSlide, createSlides, createTopic } from 'wb-slides';

// 01 - Intro
import Agenda from './01-intro/agenda.mdx';
import Goals from './01-intro/goals.mdx';
import Welkom from './01-intro/welkom.mdx';
// 02 - JavaScript in Browser
import Arrays from './02-js-browser/arrays.mdx';
import Conditions from './02-js-browser/conditions.mdx';
import Loops from './02-js-browser/loops.mdx';
import Objecten from './02-js-browser/objecten.mdx';
import Opdracht1 from './02-js-browser/opdracht.mdx';
import Variables from './02-js-browser/variables.mdx';
// 03 - JavaScript in Terminal
import Callbacks from './03-js-vscode/callbacks.mdx';
import Functions from './03-js-vscode/functions.mdx';
import Opdracht2 from './03-js-vscode/opdracht.mdx';
import ProjectSetup from './03-js-vscode/project-setup.mdx';
import ReferentieGelijkheid from './03-js-vscode/referentie-gelijkheid.mdx';
// 04 - TypeScript in Terminal
import BasicTypes from './04-typescript/basic-types.mdx';
import CustomTypes from './04-typescript/custom-types.mdx';
import Opdracht3 from './04-typescript/opdracht.mdx';
import TsIntro from './04-typescript/ts-intro.mdx';
import TsSetup from './04-typescript/ts-setup.mdx';
import UtilityTypes from './04-typescript/utility-types.mdx';
// 05 - Meer JavaScript
import AsyncAwait from './05-meer-js/async-await.mdx';
import FetchPromises from './05-meer-js/fetch-promises.mdx';
import Opdracht4 from './05-meer-js/opdracht.mdx';

export const slides = createSlides([
  createTopic({
    title: 'Welkom & Intro',
    slides: [
      createSlide({ title: 'Welkom', component: Welkom }),
      createSlide({ title: 'Goals', component: Goals }),
      createSlide({ title: 'Agenda', component: Agenda }),
    ],
  }),
  createTopic({
    title: 'Javascript in de browser (console)',
    slides: [
      createSlide({ title: 'Variables & Primitieven', component: Variables }),
      createSlide({ title: 'Objecten', component: Objecten }),
      createSlide({ title: 'Arrays', component: Arrays }),
      createSlide({ title: 'Conditions', component: Conditions }),
      createSlide({ title: 'Loops', component: Loops }),
      createAssignment({ title: 'Opdracht', component: Opdracht1 }),
    ],
  }),
  createTopic({
    title: 'Javascript in VS Code (vscode, nodejs)',
    slides: [
      createSlide({ title: 'Project Setup', component: ProjectSetup }),
      createSlide({ title: 'Functies', component: Functions }),
      createSlide({ title: 'Callbacks (array-functies)', component: Callbacks }),
      createSlide({ title: 'Referentiele gelijkheid', component: ReferentieGelijkheid }),
      createAssignment({ title: 'Opdracht', component: Opdracht2 }),
    ],
  }),
  createTopic({
    title: 'Typescript (vscode, tsx)',
    slides: [
      createSlide({ title: 'Typescript intro', component: TsIntro }),
      createSlide({ title: 'Typescript setup', component: TsSetup }),
      createSlide({ title: 'Basic types', component: BasicTypes }),
      createSlide({ title: 'Custom types & Interfaces', component: CustomTypes }),
      createSlide({ title: 'Utility types', component: UtilityTypes }),
      createAssignment({ title: 'Opdracht', component: Opdracht3 }),
    ],
  }),
  createTopic({
    title: 'Meer Javascript',
    slides: [
      createSlide({ title: 'Fetch, Promises', component: FetchPromises }),
      createSlide({ title: 'Async Await', component: AsyncAwait }),
      createAssignment({ title: 'Opdracht', component: Opdracht4 }),
    ],
  }),
]);
