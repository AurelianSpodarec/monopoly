function PlayerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <g clipPath="url(#character_svg__a)">
        <path
          fill="currentColor"
          d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
        ></path>
        <path
          fill="#000"
          fillRule="evenodd"
          d="M16 15.927c8.837 0 16-8.836 16 0a16 16 0 01-32 0c0-8.836 7.163 0 16 0z"
          clipRule="evenodd"
          data-show-on-selected="1"
          opacity="0.1"
        ></path>
        <path
          fill="#fff"
          d="M17.586 22.927a4.414 4.414 0 108.828 0 4.414 4.414 0 00-8.828 0zm-11.782 0c0 2.438 1.966 4.414 4.391 4.414s4.391-1.976 4.391-4.414c0-2.437-1.966-4.413-4.39-4.413-2.426 0-4.392 1.976-4.392 4.413z"
          data-show-on-selected="1"
        ></path>
        <path
          fill="#000"
          d="M20.414 24.747c0 .88.71 1.594 1.586 1.594a1.59 1.59 0 001.587-1.594c0-.88-.71-1.594-1.587-1.594a1.59 1.59 0 00-1.586 1.594zm-11.812 0a1.594 1.594 0 103.188 0 1.594 1.594 0 00-3.188 0z"
          data-show-on-selected="1"
        ></path>
      </g>
      <defs>
        <clipPath id="character_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlayerIcon;
