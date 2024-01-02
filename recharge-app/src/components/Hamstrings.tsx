import { Divider, Flex, Image, Text } from "@mantine/core";

function Hamstrings() {
  return (
    <Flex direction="column" mt={1500}>
      <h2>Hamstrings</h2>
      <Text><strong>The Extender (Flexibility)</strong></Text>
      <Image src="extender.png" />
      <Text mb={30}>
        Stabilise the thigh of the affected leg at 90 degrees of hip flexion and
        slowly extend the knee to a point just before pain. Perform 3 sets of 12
        repetitions, 2 x per day
      </Text>
      <Divider mb={30}/>
      <strong>The Diver (Hamstring Strength and Trunk Stabilisation)</strong>
      <Image src="diver.png" />
      <Text mb={30}>
        From an upright position, bend forward at the hip to 90 degrees whilst
        standing on the affected leg, and with a knee bend of 10-20 degrees.
        Extend the uninjured leg backwards as much as possible and hold this
        position for as long as you can. Perform slowly, 3 sets of 6 repetitions
      </Text>
      <Divider mb={30}/>
      <strong>The Glider (Specific Eccentric Strength Exercise)</strong>
      <Image src="glider.png" />

      <Text>
        Begin in an upright position whilst holding onto a fixed surface (bed,
        rail, work surface, etc). Bend the knee of the injured leg to 10-20
        degrees and put all body weight over the heel of the injured leg. Slowly
        glide the uninjured leg backwards (stand on a non friction surface),
        leaving the injured leg to lengthen out in front, and stop before you
        feel pain. Bring yourself back to the start position using your arms and
        NOT your injured leg Perform 3 sets of 4 repetitions, once every 3rd day
      </Text>
    </Flex>
  );
}

export default Hamstrings;
