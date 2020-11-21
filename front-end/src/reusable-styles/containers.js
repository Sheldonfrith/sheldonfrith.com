import styled, {css} from 'styled-components';

const centeredFlexBoxTemplate = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
export const verticalFlexBox = css`
    ${centeredFlexBoxTemplate}
    flex-direction: column;
`;

export const horizontalFlexBox = css`
    ${centeredFlexBoxTemplate}
    flex-direction: row;
`;