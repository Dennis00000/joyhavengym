// This is a reference file with best practices for image optimization

// 1. Always use the Next.js Image component
import Image from "next/image"

// 2. For above-the-fold images, use priority
;(
  <Image
    src="/images/general/hero.jpg"
    alt="Hero image"
    priority={true}
    width={500} // Added width and height for demonstration
    height={300}
  />
) <
  // 3. For images that appear below the fold, use lazy loading (default)
  Image
src = "/images/general/about.jpg"
alt = "About image"
\
  width=
{
  500
} // Added width and height for demonstration
height={300}
  // lazy loading is the default
/>

// 4. Specify sizes for responsive images
<Image
  src="/images/general/hero.jpg"
  alt="Hero image"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  width={500} // Added width and height for demonstration
  height={300}
/>

// 5. Adjustust quality as needed (default is 75)
<Image
src = "/images/general/hero.jpg"
alt = "Hero image"
quality={85} // Higher quality for important images
width={500} // Added width and height for demonstration
height={300}
/>

// 6. Use placeholder for better loading experience
<Image
  src="/images/general/hero.jpg"
  alt="Hero image"
  placeholder="blur" // Only works with imported images or blurDataURL
  width={500} // Added width and height for demonstration
  height={300}
/>

// 7. For static imports with blur placeholder:
import heroImage from "/public/images/general/hero.jpg"
;<Image
  src={heroImage || "/placeholder.svg"}
  alt="Hero image"
  placeholder="blur"
  width={500} // Added width and height for demonstration
  height={300}
/>

