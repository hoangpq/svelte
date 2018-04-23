import Block from '../../Block';
import { escape, escapeTemplate } from '../../../../utils/stringify';
import { Node } from '../../../../interfaces';

export default function stringifyAttributeValue(block: Block, chunks: Node[]) {
	return chunks
		.map((chunk: Node) => {
			if (chunk.type === 'Text') {
				return escapeTemplate(escape(chunk.data).replace(/"/g, '&quot;'));
			}

			return '${__escape(' + chunk.snippet + ')}';
		})
		.join('');
}