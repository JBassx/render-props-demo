import CollapsibleText from '@/components/CollapsibleText'

const getTexts = () => {
  const shortText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  const additionalText =
    ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  const longText = shortText + additionalText

  return { shortText, longText }
}

export default function App() {
  const { shortText, longText } = getTexts()

  return (
    <div>
      <h1>Collapsible Text Example</h1>
      <CollapsibleText
        renderText={(isExpanded) => <p>{isExpanded ? longText : shortText}</p>}
      />
    </div>
  )
}
