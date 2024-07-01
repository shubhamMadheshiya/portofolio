import express from "../assets/icons/skills/express.svg";
import firebase from "../assets/icons/skills/firebase.svg";
import git from "../assets/icons/skills/git.svg";
import github from "../assets/icons/skills/github.svg";
import gitlab from "../assets/icons/skills/gitlab.svg";
import html from "../assets/icons/skills/html.svg";
import java from "../assets/icons/skills/java.svg";
import javascript from "../assets/icons/skills/javascript.svg";
import kotlin from "../assets/icons/skills/kotlin.svg";
import kubernetes from "../assets/icons/skills/kubernetes.svg";
import materialUi from "../assets/icons/skills/material-ui.svg";
import mongodb from "../assets/icons/skills/mongodb.svg";
import nodejs from "../assets/icons/skills/nodejs.svg";
import react from "../assets/icons/skills/react.svg";
import redux from "../assets/icons/skills/redux.svg";
import sass from "../assets/icons/skills/sass.svg";
import typescript from "../assets/icons/skills/typescript.svg";
import xml from "../assets/icons/skills/xml.svg";
import socket from "../assets/icons/skills/socket.svg";
import reactrouter from "../assets/icons/skills/reactrouter.svg";
import android from "../assets/icons/skills/android.svg";
import ansible from "../assets/icons/skills/ansible.svg";
import aws from "../assets/icons/skills/aws.svg";
import css from "../assets/icons/skills/css.svg";
import docker from "../assets/icons/skills/docker.svg";

const skills = [
  { name: "Express", img: express, link: "https://expressjs.com/" },
  { name: "Firebase", img: firebase, link: "https://firebase.google.com/docs" },
  { name: "Git", img: git, link: "https://git-scm.com/doc" },
  { name: "GitHub", img: github, link: "https://docs.github.com/en" },
  { name: "GitLab", img: gitlab, link: "https://docs.gitlab.com/ee/" },
  {
    name: "HTML",
    img: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { name: "Java", img: java, link: "https://docs.oracle.com/en/java/" },
  {
    name: "JavaScript",
    img: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Kotlin",
    img: kotlin,
    link: "https://kotlinlang.org/docs/home.html",
  },
  { name: "Kubernetes", img: kubernetes, link: "https://kubernetes.io/docs/" },
  {
    name: "Material UI",
    img: materialUi,
    link: "https://mui.com/getting-started/installation/",
  },
  { name: "MongoDB", img: mongodb, link: "https://docs.mongodb.com/" },
  { name: "Node.js", img: nodejs, link: "https://nodejs.org/en/docs/" },
  {
    name: "React",
    img: react,
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Redux",
    img: redux,
    link: "https://redux.js.org/introduction/getting-started",
  },
  { name: "Sass", img: sass, link: "https://sass-lang.com/documentation" },
  {
    name: "TypeScript",
    img: typescript,
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "XML",
    img: xml,
    link: "https://www.w3schools.com/xml/xml_whatis.asp",
  },
  { name: "Socket.io", img: socket, link: "https://socket.io/docs/v4" },
  {
    name: "React Router",
    img: reactrouter,
    link: "https://reactrouter.com/en/main",
  },
  { name: "Android", img: android, link: "https://developer.android.com/" },
  { name: "Ansible", img: ansible, link: "https://docs.ansible.com/" },
  { name: "AWS", img: aws, link: "https://aws.amazon.com/documentation/" },
  {
    name: "CSS",
    img: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "Docker", img: docker, link: "https://docs.docker.com/" },
];

export default skills;
