import React, { useState } from 'react'
import styles from './CollapsibleText.module.css'
interface CollapsibleTextProps {
  renderText: (isExpanded: boolean) => React.ReactNode
}

export default function CollapsibleText({ renderText }: CollapsibleTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleText = () => {
    setIsExpanded((prevState) => !prevState)
  }

  return (
    <div className={styles.wrapper}>
      <div>{renderText(isExpanded)}</div>
      <button onClick={toggleText}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )
}
