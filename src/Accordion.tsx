import React from "react"

type AccordionItem = {
  title: string
  Component: React.FC
}

type AccordionProps = {
  items: AccordionItem[]
  currentIndex: number | number[]
  onToggle: (nextIndex: number | number[]) => void
  multiple?: boolean
  collapseOthers?: boolean

  containerClassName?: string
  containerStyle?: React.CSSProperties
  itemClassName?: string
  itemStyle?: React.CSSProperties
  triggerClassName?: string
  triggerStyle?: React.CSSProperties
  panelClassName?: string
  panelStyle?: React.CSSProperties
}

export const Accordion = ({
  items,
  currentIndex,
  onToggle,
  multiple = false,
  collapseOthers = false,
  containerClassName,
  containerStyle,
  itemClassName,
  itemStyle,
  triggerClassName,
  triggerStyle,
  panelClassName,
  panelStyle,
}: AccordionProps) => {
  const isOpen = (index: number): boolean => {
    if (multiple && Array.isArray(currentIndex)) {
      return currentIndex.includes(index)
    }
    return currentIndex === index
  }

  const handleClick = (index: number) => {
    if (multiple) {
      const current = Array.isArray(currentIndex) ? currentIndex : []
      const isCurrentlyOpen = current.includes(index)

      if (collapseOthers) {
        onToggle(isCurrentlyOpen ? [] : [index])
      } else {
        const next = isCurrentlyOpen
          ? current.filter((i) => i !== index)
          : [...current, index]
        onToggle(next)
      }
    } else {
      const isCurrentlyOpen = currentIndex === index
      onToggle(isCurrentlyOpen ? -1 : index)
    }
  }

  return (
    <div className={containerClassName} style={containerStyle}>
      {items.map((item, index) => {
        const { Component } = item
        const open = isOpen(index)
        const triggerId = `accordion-trigger-${index}`
        const panelId = `accordion-panel-${index}`

        return (
          <div key={index} className={itemClassName} style={itemStyle}>
            <button
              role="button"
              id={triggerId}
              aria-controls={panelId}
              aria-expanded={open}
              onClick={() => handleClick(index)}
              className={triggerClassName}
              style={triggerStyle}
            >
              {item.title}
            </button>

            {open && (
              <div
                role="region"
                id={panelId}
                aria-labelledby={triggerId}
                className={panelClassName}
                style={panelStyle}
              >
                <Component />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
