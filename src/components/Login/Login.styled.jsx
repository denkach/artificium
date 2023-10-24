import styled from 'styled-components';

export const Logo = styled.img`
    position: absolute;
    top: ${p => p.theme.space[9]}px;
    left: ${p => p.theme.space[9]}px;
    display: block;
    width: 32px;
    height: 32px;
`;

export const Title = styled.h2`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.heading.xl};
    font-weight: ${p => p.theme.fontWeights.regular};
    color: #fff;
    line-height: ${p => p.theme.lineHeights.heading.xl};
    margin-bottom: ${p => p.theme.space[6]}px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const LoginFragment = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold};
    background: linear-gradient(${p => p.theme.gradients.dayblueBlueGreen500});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;

export const Image = styled.img`
    width: 720px;
    height: 1024px;
`;

export const Text = styled.p`
    font-size: ${p => p.theme.fontSizes.body.xl};
    line-height: ${p => p.theme.lineHeights.body.xl};
    color: ${p => p.theme.colors.nobleBlack.nb300};
    margin-bottom: ${p => p.theme.space[11]}px;
`;

export const Input = styled.input`
    padding: 12px 52px;
    background-color: ${p => p.theme.colors.nobleBlack.nb600};
    border: none;
    outline: none;
    border-radius: ${p => p.theme.radii.normal};
    height: 48px;
    color: #fff;

    &::placeholder {
        color: ${p => p.theme.colors.nobleBlack.nb300};
    }

    &:first-child {
        margin-bottom: ${p => p.theme.space[6]}px;
    }

    &:last-child {
        margin-bottom: ${p => p.theme.space[9]}px;
    }

    &:focus {
        border: 8px solid transparent; /* Установите прозрачную рамку */
        border-image: linear-gradient(${p => p.theme.gradients.blueGreen500}) 1; /* Градиентная рамка */
        border-image-slice: 1; /* Размер рамки */
        border-image-width: 2px; /* Ширина рамки */
        border-image-repeat: stretch;
        padding-left: 44px;
        padding-right: 44px;
        box-shadow: 0px 0px 0px 4px rgba(132, 220, 245, 0.24);
    }
`

export const ButtonLogin = styled.button`
    margin-top: ${p => p.theme.space[9]}px;
    margin-bottom: ${p => p.theme.space[9]}px;
    border-radius: ${p => p.theme.radii.normal};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.stemGreen.sg500};
    cursor: pointer;
    border: none;

    &:hover {
        background-color: ${p => p.theme.colors.stemGreen.sg400};
    }
    &:active {
        background-color: ${p => p.theme.colors.stemGreen.sg300};
    }

`

export const Label = styled.label`
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 40px;
    cursor: pointer;
`;

export const InputRemember = styled.input`
    position: absolute;
    appearance: none;
`;

export const Checkbox = styled.span`
    position: absolute;
    background-image: url("${p => p.path}");
    width: 26px;
    height: 26px;
    margin-left: -40px;
`;

export const ForgotLink = styled.a`
    font-size: ${p => p.theme.fontSizes.body.l};
    font-weight: ${p => p.theme.fontWeights.semibold};
    line-height: ${p => p.theme.lineHeights.body.l};
    line-spacing: 0.15px;
    background: linear-gradient(${p => p.theme.gradients.blueGreen500});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;

export const Networks = styled.span`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[5]}px;
    color: #686B6E;
    font-size: ${p => p.theme.fontSizes.body.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.body.l};
    margin-bottom: ${p => p.theme.space[9]}px;

    &::before, &::after {
        content: "";
        display: block;
        width: 185px;
        height: 1px;
        background-color: ${p => p.theme.colors.nobleBlack.nb500};
    }
`;

export const Network = styled.a`
    display: flex;
    align-items: center;
    color: #686B6E;
    border-radius: 12px;
    height: ${p => p.theme.space[9]}px;
    padding: 8px 24px;
    background-color: ${p => p.theme.colors.nobleBlack.nb600};

    &:hover {
        background-color: ${p => p.theme.colors.nobleBlack.nb500};
        color: ${p => p.theme.colors.nobleBlack.nb200};
    };
`;

export const Icon = styled.img`
    margin-right: ${p => p.theme.space[4]}px;
`;