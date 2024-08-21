import { defineClientConfig } from '@vuepress/client'
import { addIcons } from "oh-vue-icons";
import {
  CoGit,
  RiHomeHeartFill,
  FaBloggerB,
  GiNotebook,
  BiTools,
  MdAutoawesome,
  FaFortAwesome,
  CoCodio,
  FaSatelliteDish,
  FaTag,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliLine,
  RiHomeHeartFill,
  FaBloggerB,
  GiNotebook,
  BiTools,
  MdAutoawesome,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  CoCodio,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine
);
export default defineClientConfig({
  enhance({ app, router, siteData }) { },
  setup() { },
  rootComponents: [],
})