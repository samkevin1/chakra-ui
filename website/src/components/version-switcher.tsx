import { Select, SelectProps, useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import pkgJSON from "@chakra-ui/react/package.json"

function pkgVersion() {
  let version: any = pkgJSON.version.split(".")
  version.pop()
  return version.join(".")
}

const versions = [
  { label: `v${pkgVersion()}`, url: "https://chakra-ui.com" },
  { label: "v0.8", url: "https://v0.chakra-ui.com" },
]

const v1Url = versions[0].url

function VersionSwitcher(props: SelectProps) {
  const router = useRouter()

  return (
    <Select
      mr="1rem"
      variant="unstyled"
      fontWeight="semibold"
      color={useColorModeValue("gray.600", "whiteAlpha.600")}
      value={v1Url}
      aria-label="Select the Chakra UI Docs version. You're currently viewing the version 1.0 docs"
      onChange={(e) => {
        router.push(e.target.value)
      }}
      {...props}
    >
      {versions.map(({ label, url }) => (
        <option key={url} value={url}>
          {label}
        </option>
      ))}
    </Select>
  )
}

export default VersionSwitcher
