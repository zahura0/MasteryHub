// Static data for instructor blogs. Replace with API later.
import image01 from "../assets/image_01.png";
import image02 from "../assets/image_02.png";
import image03 from "../assets/image_03.png";
import image04 from "../assets/image_04.png";
import loginIllustration from "../assets/login-illustration.jpg";

export const blogs = [
  {
    id: 1,
    slug: "make-gui-in-java-example",
    title: "How To Make GUI In Java With Example",
    excerpt:
      "Step-by-step guide to building a clean Swing-based UI with events, layouts, and best practices.",
    author: "Dasteen",
    date: "Jan 10, 2022",
    readTime: "3 Min Read",
    category: "Web Development",
    rating: 4.0,
    price: 33.99,
    image: image01,
    video: "https://www.youtube-nocookie.com/embed/2LhoCfjm8R4?rel=0&modestbranding=1",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut er massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.

Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut er massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.

Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut er massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.`,
  },
  {
    id: 2,
    slug: "learn-java-easily",
    title: "Learn Java Easily: Practical Examples",
    excerpt: "A gentle introduction to Java with hands-on mini projects.",
    author: "Dasteen",
    date: "Jan 12, 2022",
    readTime: "4 Min Read",
    category: "Programming",
    rating: 4.5,
    price: 19.99,
    image: image02,
    video: "https://www.youtube-nocookie.com/embed/eIrMbAQSU34?rel=0&modestbranding=1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    id: 3,
    slug: "writing-better-articles",
    title: "Writing Better Technical Articles",
    excerpt: "Structure, clarity, and visuals that engage.",
    author: "Dasteen",
    date: "Jan 18, 2022",
    readTime: "5 Min Read",
    category: "Content Creation",
    rating: 4.2,
    price: 0,
    image: image03,
    video: "https://www.youtube-nocookie.com/embed/K4TOrB7at0Y?rel=0&modestbranding=1",
    content:
      "Suspendisse potenti. In faucibus, elit sit amet ultricies feugiat, lectus tellus posuere massa, eu posuere nisl mi et lectus.",
  },
  {
    id: 4,
    slug: "responsive-ui-patterns",
    title: "Modern Responsive UI Patterns",
    excerpt: "From cards to grids—design that adapts.",
    author: "Dasteen",
    date: "Jan 25, 2022",
    readTime: "3 Min Read",
    category: "UI/UX",
    rating: 4.3,
    price: 0,
    image: image04,
    video: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1",
    content:
      "Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus.",
  },
  {
    id: 5,
    slug: "illustrated-guide-to-auth",
    title: "An Illustrated Guide to Auth",
    excerpt: "Understand tokens, sessions, and flows with visuals.",
    author: "Dasteen",
    date: "Feb 02, 2022",
    readTime: "6 Min Read",
    category: "Security",
    rating: 4.6,
    price: 0,
    image: loginIllustration,
    video: "https://www.youtube-nocookie.com/embed/8ZjpI6fgYSY?rel=0&modestbranding=1",
    content:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}
