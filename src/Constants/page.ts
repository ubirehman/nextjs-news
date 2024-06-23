export const Constants = {
  LOGIN_FORM_TEXT: {
    TITLE: 'DeMessa News',
    SUB_TITLE: 'Admin Login',
    SUBMIT_TEXT: 'Login',
    EMAIL_PLACEHOLDER: 'email',
    EMAIL_REQUIRE_MESSAGE: 'Email is required',
    PASSWORD_PLACEHOLDER: 'password',
    PASSWORD_REQUIRE_MESSAGE: 'Password is required',
    REMEMBER_ME: 'remember me',
  },

  LINKS: {
    ADMIN: '/admin',
    LOGIN: '/login',
  },

  FOOTER: {
    CONTACT_INFORMATION: {
      HEADING: 'Heading',
      CONTACT_INFO: [
        {
          id: 1,
          heading: 'Contact email address',
          value: 'rehmanubaid5@gmail.com',
        },
        { id: 2, heading: 'Contract#', value: '00923018988247' },
      ],
    },
    SOCIAL_ICONS: {
      HEADING: 'Social Icons',
      LINKS: [
        {
          id: 1,
          name: 'Facebook',
          link: 'facebook.com',
          icon: '/animated/socialicons/facebook.svg',
          alt: 'facebook-icon',
        },
        {
          id: 2,
          name: 'Twitter',
          link: 'twitter.com',
          icon: '/animated/socialicons/twitter.svg',
          alt: 'twitter-icon',
        },
        {
          id: 3,
          name: 'Instagram',
          link: 'instagram.com',
          icon: '/animated/socialicons/instagram.svg',
          alt: 'instagram-icon',
        },
      ],
    },
    QUICK_LINKS: {
      HEADING: 'Quick Links',
      LINKS: [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: '/about' },
        { id: 1, name: 'Privacy Policy', link: '/privacy-policy' },
        { id: 1, name: 'Contact Us', link: '/contact' },
      ],
    },
    COPY_RIGHT_TEXT: 'DeMessa News. All copyrights reserved',
  },

  HEADER_NAVIGATION_LINKS: [
    { id: 0, title: 'Home', link: '/' },
    { id: 1, title: 'About', link: '/about' },
    { id: 2, title: 'Contact Us', link: '/contact' },
  ],
  COMPANY_IDENTITY: 'DeMessa News',
  HIGHLIGHT_NEWS:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sed impedit illo quae accusamus praesentium laborum ut odio. Itaque, voluptatem? Animi consectetur beatae molestiae totam aut ducimus, optio ad laudantium.',

  ADMIN_PANEL: {
    SIDE_BAR: {
      SIDEBAR_LINKS: [
        { id: 0, name: 'Create Post', link: '/admin/#create', hash: '#create' },
        { id: 1, name: 'Drafts', link: '/admin/#drafts', hash: '#drafts' },
        { id: 2, name: 'All Posts', link: '/admin/#all', hash: '#all' },
      ],
    },

    POSTS: {
      CREATE_POST: {
        HEADING: 'Create a new Post',
        TITLE: 'Title',
        CONTENT: 'Content',
        PUBLISH: 'Publish',
      },
      ALL_POSTS: {
        HEADING: 'All news articles',
      },
    },
  },

  POPUP_MESSAGES: {
    USER_LOGEDIN_SUCCESS_MESSAGE: 'Logged in successfully',
    USER_LOGEDIN_FAIL_MESSAGE: 'User or email incorrect',
  },

  BUTTON_TEXTS: {
    EDIT: 'Edit',
    DELETE: 'Delete',
  },

  API_LINKS: {
    AUTHENTICATE: '/api/authenticate',
    CREATE_POST: '/api/posts/create',
    FETCH_POSTS: '/api/posts',
    DELETE_POST: '/api/posts/delete'
  },
};
