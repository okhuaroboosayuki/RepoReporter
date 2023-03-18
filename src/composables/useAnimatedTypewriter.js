import { ref, onMounted } from 'vue'

export default function useAnimatedTypewriter() {
    // message that will be displayed and typed out character by character
  const typeValue = ref('')

//   boolean that keeps track of whether the typing animation is currently running or not. This is used to determine whether to display the blinking cursor or not.
  const typeStatus = ref(false)

//   array of strings that will be typed out one at a time
  const typeArray = ref(['RepoReporter', 'The Code Crusader', 'The Code Whisperer'])

//   the delay in milliseconds between each character being typed, simulating the effect of a typewriter
  const typingSpeed = ref(200)

//   the delay in milliseconds between each character being erased when the animation is reversed
  const erasingSpeed = ref(100)

//   the delay in milliseconds between each message being typed out. This is used to create the effect of a typewriter.
  const newTextDelay = ref(2000)

  
  //   two counters that keep track of which message is currently being typed out and which character is currently being typed.
//   the index of the current message in the typeArray 
  const typeArrayIndex = ref(0)
//   the index of the current character in the current message
  const charIndex = ref(0)

//   appends each character of the current text value in the typeArray to the typeValue variable, one character at a time
  const typeText = () => {
    if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
      if (!typeStatus.value) typeStatus.value = true
      typeValue.value += typeArray.value[typeArrayIndex.value].charAt(charIndex.value)
      charIndex.value += 1
      setTimeout(typeText, typingSpeed.value)
    } else {
      typeStatus.value = false
      setTimeout(eraseText, newTextDelay.value)
    }
  }

//   deletes each character of the current text value from the typeValue variable, one character at a time
  const eraseText = () => {
    if (charIndex.value > 0) {
      if (!typeStatus.value) typeStatus.value = true
      typeValue.value = typeArray.value[typeArrayIndex.value].substring(0, charIndex.value - 1)
      charIndex.value -= 1
      setTimeout(eraseText, erasingSpeed.value)
    } else {
      typeStatus.value = false
      typeArrayIndex.value += 1
      if (typeArrayIndex.value >= typeArray.value.length) typeArrayIndex.value = 0
      setTimeout(typeText, typingSpeed.value + 1000)
    }
  }

  onMounted(() => {
    setTimeout(typeText, newTextDelay.value + 200)
  })

  return {
    typeValue,
    typeStatus
  }
}
