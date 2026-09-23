<script lang="ts">
  interface Segment {
    text: string;
    bold: boolean;
  }

  interface Props {
    text: string;
    keywords: string[];
  }

  let { text, keywords }: Props = $props();

  function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function buildSegments(text: string, keywords: string[]): Segment[] {
    const cleanKeywords = keywords
      .map(k => k.trim())
      .filter(k => k.length > 0);

    if (cleanKeywords.length === 0) {
      return [{ text, bold: false }];
    }

    const sorted = [...cleanKeywords]
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp);

    const pattern = new RegExp(`\\b(${sorted.join('|')})\\b`, 'gi');

    const segments: Segment[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        segments.push({ text: text.slice(lastIndex, match.index), bold: false });
      }
      segments.push({ text: match[0], bold: true });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      segments.push({ text: text.slice(lastIndex), bold: false });
    }

    return segments;
  }

  let segments = $derived(buildSegments(text, keywords));
</script>

<li>
  {#each segments as segment}
    {#if segment.bold}<strong>{segment.text}</strong>{:else}{segment.text}{/if}
  {/each}
</li>