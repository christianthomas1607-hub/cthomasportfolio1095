import { useEffect, useRef } from "react";

export function HTMLFile(htmlPath) {

      const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let canceled = false
    const loadHTML = async () => {
      if (!htmlPath) return
      try {
        const response = await fetch(htmlPath)
        if (response.ok) {
          const html = await response.text()
          if (!canceled && contentRef.current) {
            contentRef.current.innerHTML = html
            console.log(`HTML: `)
          }
        } else {
          console.error("Failed to load HTML file.")
        }
      } catch (error) {
        console.error("Error fetching HTML:", error)
      }
    }

    loadHTML()
    
    return () => {
      canceled = true
      if (contentRef.current) {
        contentRef.current.innerHTML = ''
      }
    }
  }, [htmlPath])

    return (
        <>
            <div
            id="emailCode"
            ref={contentRef}
            className="w-full"
            />
        </>
    )

}