---
id: package-a-bundle
title: Package a bundle
sidebar_label: Package a bundle
---

Packaging a bundle means to **compose a system with System Runtime core systems**. By doing that System Runtime library will include your system (i.e. your code will be include in *system-runtime.min.js* file).

To do so, put your bundle in the **addons** directory of System Runtime. Then **build** System Runtime and the bundle will be composed with System Runtime core systems.

When System Runtime will run, your system will be ready to be started.

>**Version compatibility**
>
>Remember that the example works only client-side.