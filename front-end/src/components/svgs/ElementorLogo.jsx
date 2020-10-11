import * as React from "react";

function ElementorLogo(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M462.999 26.001H49c-12.731 0-22.998 10.268-22.998 23v413.998c0 12.732 10.267 23 22.998 23h413.999c12.732 0 22.999-10.268 22.999-23V49.001c0-12.732-10.267-23-22.999-23"
        fill="#d63362"
      />
      <path
        fill="#fff"
        d="M153.836 153.836h40.865v204.329h-40.865zM235.566 317.299h122.7v40.866h-122.7zM235.566 235.566h122.7v40.865h-122.7zM235.566 153.733h122.7v40.865h-122.7z"
      />
    </svg>
  );
}

export default ElementorLogo;
