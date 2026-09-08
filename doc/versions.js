'use strict';

// The latest release. NOT necessarily equal to latest-stable, as stable releases are only
// once every two versions.
// >>> CHANGE THIS WHEN A NEW VERSION IS RELEASED! (stable or not) <<<
const LATEST_VERSION = 640;
const LATEST_VERSION_IS_STABLE = LATEST_VERSION % 4 === 0;
const LATEST_STABLE = LATEST_VERSION - 2 * !LATEST_VERSION_IS_STABLE;
const FIRST_VERSION = 610;
