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
import Callbacks from './03-js-terminal/callbacks.mdx';
import Functions from './03-js-terminal/functions.mdx';
import Opdracht2 from './03-js-terminal/opdracht.mdx';
import ReferentieGelijkheid from './03-js-terminal/referentie-gelijkheid.mdx';
import ProjectSetup from './03-js-terminal/setup.mdx';
// 04 - TypeScript in Terminal
import BasicTypes from './04-ts-terminal/basic-types.mdx';
import CustomTypes from './04-ts-terminal/interfaces.mdx';
import Opdracht3 from './04-ts-terminal/opdracht.mdx';
import TsSetup from './04-ts-terminal/setup.mdx';
import TsIntro from './04-ts-terminal/ts-intro.mdx';
import UtilityTypes from './04-ts-terminal/utility-types.mdx';
// 05 - Meer JavaScript
import AsyncAwait from './05-more/async-await.mdx';
import FetchPromises from './05-more/fetch-promises.mdx';
import Opdracht4 from './05-more/opdracht.mdx';

export const slides = createSlides([
  createTopic({
    title: 'Welkom',
    slides: [
      createSlide({ title: 'Welkom', component: Welkom }),
      createSlide({ title: 'Goals', component: Goals }),
      createSlide({ title: 'Agenda', component: Agenda }),
    ],
  }),
  createTopic({
    title: 'Javascript (browser)',
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
    title: 'Javascript (VSCode)',
    slides: [
      createSlide({ title: 'Project Setup', component: ProjectSetup }),
      createSlide({ title: 'Functies', component: Functions }),
      createSlide({ title: 'Callbacks (array-functies)', component: Callbacks }),
      createSlide({ title: 'Referentiele gelijkheid', component: ReferentieGelijkheid }),
      createAssignment({ title: 'Opdracht', component: Opdracht2 }),
    ],
  }),
  createTopic({
    title: 'Typescript (VSCode)',
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
    title: 'Async Await',
    slides: [
      createSlide({ title: 'Fetch, Promises', component: FetchPromises }),
      createSlide({ title: 'Async Await', component: AsyncAwait }),
      createAssignment({ title: 'Opdracht', component: Opdracht4 }),
    ],
  }),
]);
